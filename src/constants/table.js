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
      width: 120,
    },
    {
      title: "Familyasi",
      dataIndex: "surname",
      width: 120,
    },
    {
      title: "Darajasi",
      dataIndex: "role",
      width: 120,
    },
    {
      title: "Telefon Raqami",
      dataIndex: "phone",
      width: 80,
    },
    {
      title: "Foydalanuvchi nomi",
      dataIndex: "userName",
      width: 80,
    },
    {
      title: "Amallar",
      dataIndex: "actions",
      width: 150,
    },
  ];
};

export const productsColumns = () => {
  return [
    {
      title: "№",
      dataIndex: "colIndex",
      width: 20,
    },
    {
      title: "Nomi",
      dataIndex: "name",
      width: 100,
    },
    {
      title: "Tavsifi",
      dataIndex: "description",
      width: 100,
    },
    {
      title: "Asl Narxi",
      dataIndex: "price",
      width: 70,
    },
    {
      title: "Chegirmasi",
      dataIndex: "discount",
      width: 70,
    },
    {
      title: "Chegirmadagi narxi",
      dataIndex: "discountPrice",
      width: 70,
    },
    {
      title: "Yaratuvchi",
      dataIndex: "userName",
      width: 70,
    },
    {
      title: "Amallar",
      dataIndex: "actions",
      width: 40,
    },
  ];
};
