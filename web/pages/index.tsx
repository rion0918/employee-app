import React, { useState } from 'react'; 
import { useQuery, useMutation } from '@apollo/client';
import { GET_ALL_EMPLOYEES } from '@/graphql/queries';
import {
  CREATE_EMPLOYEE,
  DELETE_EMPLOYEE,
  UPDATE_EMPLOYEE,
} from '@/graphql/mutations';

type Employee = {
  id: number;
  name: string;
  team: string;
  memo?: string;
};

export default function Home() {
  const { data, loading, error, refetch } = useQuery(GET_ALL_EMPLOYEES);
  const [createEmployee] = useMutation(CREATE_EMPLOYEE);
  const [deleteEmployee] = useMutation(DELETE_EMPLOYEE);
  const [updateEmployee] = useMutation(UPDATE_EMPLOYEE);

  const [name, setName] = useState('');
  const [team, setTeam] = useState('');
  const [memo, setMemo] = useState('');
  const [keyword, setKeyword] = useState('');
  const [editing, setEditing] = useState<Employee | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editing) {
        await updateEmployee({
          variables: {
            id: editing.id,
            name,
            team,
            memo,
          },
        });
        setEditing(null);
      } else {
        await createEmployee({
          variables: { name, team, memo },
        });
      }
      setName('');
      setTeam('');
      setMemo('');
      refetch();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (emp: Employee) => {
    setEditing(emp);
    setName(emp.name);
    setTeam(emp.team);
    setMemo(emp.memo || '');
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteEmployee({ variables: { id } });
      refetch();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return (
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">社員一覧</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="animate-pulse bg-gray-200 h-24 rounded-lg" />
          ))}
        </div>
      </main>
    );
  }

  if (error) return <p className="text-red-500 text-center mt-10">エラーが発生しました: {error.message}</p>;

  return (
    <main className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="max-w-md mx-auto mb-6">
  <input
    type="text"
    placeholder="名前・チーム・メモで検索"
    value={keyword}
    onChange={(e) => setKeyword(e.target.value)}
    className="w-full px-4 py-2 border rounded"
  />
</div>
      <h1 className="text-3xl font-bold text-center">社員一覧</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {data.allEmployees.filter((emp: Employee) =>
        [emp.name, emp.team, emp.memo].some((field) =>
      field?.toLowerCase().includes(keyword.toLowerCase())
    )
  ).map((emp: Employee) => (
          <div
            key={emp.id}
            className="bg-white shadow-md hover:shadow-lg transition-all rounded-lg p-4 border border-gray-200"
          >
            <h2 className="text-lg font-semibold">{emp.name}</h2>
            <p className="text-gray-600">{emp.team}</p>
            <p className="text-sm text-gray-500">{emp.memo}</p>
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => handleEdit(emp)}
                className="px-3 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
              >
                編集
              </button>
              <button
                onClick={() => handleDelete(emp.id)}
                className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
              >
                削除
              </button>
            </div>
          </div>
        ))}
      </div>

      <hr />

      <h2 className="text-2xl font-semibold text-center">
        {editing ? '社員情報を編集' : '新規社員登録'}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-6 rounded-lg shadow-md space-y-4 max-w-md mx-auto"
      >
        <input
          type="text"
          placeholder="名前"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="text"
          placeholder="チーム"
          value={team}
          onChange={(e) => setTeam(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="text"
          placeholder="メモ"
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
        <button
          type="submit"
          className="w-full py-2 text-white bg-green-500 rounded hover:bg-green-600"
        >
          {editing ? '更新する' : '登録する'}
        </button>
      </form>
    </main>
  );
}