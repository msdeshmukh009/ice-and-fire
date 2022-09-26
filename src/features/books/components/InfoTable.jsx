const InfoTable = ({ bookDetail }) => {
  const tableData = [
    { tableHeading: "Authors", property: "authors" },
    { tableHeading: "Number of pages", property: "numberOfPages" },
    { tableHeading: "Publisher", property: "publisher" },
    { tableHeading: "Country", property: "country" },
    { tableHeading: "MediaType", property: "mediaType" },
    { tableHeading: "Released", property: "released" },
  ];

  return (
    <table className="w-4/5 m-auto mt-32 text-center border-2">
      <tbody>
        {tableData.map(({ tableHeading, property }) => (
          <tr className="border-2" key={tableHeading}>
            <th className="border-2 w-1/2 p-2">{tableHeading}</th>
            <td className="border-2">{bookDetail[property] ? bookDetail[property] : "-"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { InfoTable };
