export const usersColumns = () => {
  return [
    {
      title: "№",
      dataIndex: "colIndex",
      width: 50,
    },
    {
      title: "Ismi",
      dataIndex: "name",
      width: 150,
    },
    {
      title: "Familyasi",
      dataIndex: "surname",
      width: 150,
    },
    {
      title: "Darajasi",
      dataIndex: "role",
      width: 150,
    },
    {
      title: "Amallar",
      dataIndex: "actions",
      width: 150,
    },
  ];
};