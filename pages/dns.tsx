import React, { useState, useEffect } from 'react';
import {
  Text,
  Button,
  Grid,
  Input,
  Table,
  Toggle,
  Select,
} from '@geist-ui/react';
import { useSession, signOut } from 'next-auth/client';
import { useRouter } from 'next/router';
import { DnsRecord } from '@prisma/client';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface ITable extends DnsRecord {
  typeC?: JSX.Element;
  nameC?: JSX.Element;
  contentC?: JSX.Element;
  ttlC?: JSX.Element;
  proxiedC?: JSX.Element;
  removeButton?: (actions?: any, rowData?: any) => JSX.Element;
  saveButton?: any;
}
const records: string[] = ['A', 'AAAA', 'CNAME', 'TXT', 'MX', 'NS'];

function DNS_Dashboard() {
  const [session] = useSession();
  const router = useRouter();
  const [dnsData, setDNSdata] = useState<DnsRecord[]>([]);
  const [tableData, setTableData] = useState<ITable[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const { data, error } = useSWR<DnsRecord[]>('/api/dns', fetcher);

  useEffect(() => {
    if (!session) router.push('/login');
  }, [session]);

  const pickRecordType = (value: string, id: string) => (
    <Select
      placeholder="Pick One"
      initialValue={value}
      className={id}
      onChange={(val) => updateState(id, 'type', val as string)}
    >
      {records.map((record) => (
        <Select.Option key={record} value={record}>
          {record}
        </Select.Option>
      ))}
    </Select>
  );
  const getTTL = (value: string, id: string) => (
    <Input
      type="digit"
      className={id}
      initialValue={value}
      onChange={(e) => updateState(id, 'ttl', e.target.value)}
    />
  ); // 1 is automatic
  const contentInput = (value: string, id: string, type: keyof DnsRecord) => (
    <Input
      className={id}
      initialValue={value}
      onChange={(e) => updateState(id, type, e.target.value)}
    />
  );
  const toggleCF = (status: boolean, id: string) => (
    <Toggle
      initialChecked={status}
      className={id}
      onChange={(e) => updateState(id, 'proxied', e.target.checked)}
    />
  );
  const removeOperation = (actions?, rowData?) => {
    return (
      <Button type="error" auto size="mini" onClick={() => actions.remove()}>
        Remove
      </Button>
    );
  };
  const saveOperation = (actions?, rowData?) => {
    return (
      <Button
        type="success"
        auto
        size="mini"
        onClick={async () => {
          console.log(rowData.rowValue);
          // await fetch('/api/dns', {
          //   method: 'PATCH',
          //   body: JSON.stringify(rowData.rowValue),
          // });
        }}
      >
        Save
      </Button>
    );
  };

  const updateState = (
    id: string,
    key: keyof DnsRecord,
    value: string | boolean
  ) => {
    const temp = tableData;
    console.log('updateState ->', temp);
    const tempResult = temp.map((dns) =>
      dns.id === id ? { ...dns, [key]: value } : dns
    );
    console.log('updateState done ->', tempResult);
    setTableData(tempResult);
  };

  useEffect(() => {
    console.log('useeffect searchterm, dnsdata ', dnsData);
    if (dnsData) {
      const filteredData: ITable[] = dnsData.filter((dns) =>
        dns.name.includes(searchTerm)
      );
      // console.log(filteredData);
      filteredData.forEach((d) => {
        // d.name = d.name.split('.')[0];
        d.typeC = pickRecordType(d.type, d.id);
        d.nameC = contentInput(d.name, d.id, 'name');
        d.contentC = contentInput(d.content, d.id, 'content');
        d.ttlC = getTTL(d.ttl.toString(), d.id);
        d.proxiedC = toggleCF(d.proxied, d.id);
        d.removeButton = removeOperation;
        d.saveButton = saveOperation;
      });
      setTableData(filteredData);
    }
  }, [searchTerm, dnsData]);

  useEffect(() => {
    console.log('useeffect dnsdata', dnsData);
  }, [dnsData]);

  useEffect(() => {
    console.log('useeffect data', dnsData);
    if (data) setDNSdata(data);
  }, [data]);

  if (!data) return <h1>Loading</h1>;
  if (error) return <h1>Error</h1>;

  return (
    <>
      <Grid.Container
        gap={2}
        justify="center"
        alignContent="center"
        direction="column"
      >
        <Grid>
          <Text h1>DNS</Text>
        </Grid>
        <Grid>
          <Input
            clearable
            placeholder="DNS"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <Table data={tableData} hover>
            <Table.Column prop="typeC" label="type" />
            <Table.Column prop="nameC" label="name" />
            <Table.Column prop="contentC" label="value" />
            <Table.Column prop="ttlC" label="ttl" />
            <Table.Column prop="proxiedC" label="proxy" />
            <Table.Column prop="removeButton" label="Remove" />
            <Table.Column prop="saveButton" label="Save" />
          </Table>
        </Grid>
      </Grid.Container>
    </>
  );
}

export default DNS_Dashboard;

// Handle Erros using Notification!
