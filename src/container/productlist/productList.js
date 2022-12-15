import React from "react";
import DataTable from "react-data-table-component";
import { ListHeader } from "../../components/molecules/list-header";
import { data } from "../../constants/product-list";
import Image from "next/image";
import styles from "./styles.module.css";

export const Pro_List = () => {
  const customStyles = {
    rows: {
      style: {
        minHeight: "67px", // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
        backgroundColor: "#fafbfe",
        borderRadius: "0px",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
      },
    },
  };
  const columns = [
    {
      name: "Product Name",
      selector: (row) => {
        console.log(row);
        return (
          <div>
            <img src={row?.image} className="me-2" />
            {row?.productName}
          </div>
        );
      },
      sortable: true,
      width: "160px",
    },
    {
      name: "SKU",
      selector: (row) => row.sku,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "Brand",
      selector: (row) => row.brand,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Unit",
      selector: (row) => row.unit,
      sortable: true,
    },
    {
      name: "Qty",
      selector: (row) => row.qty,
      sortable: true,
    },
    {
      name: "Created By",
      selector: (row) => row.createdBy,
      sortable: true,
    },

    {
      name: "Action",
      selector: (row) => row.action,
      sortable: true,
    },
  ];
  return (
    <>
      <ListHeader />

      <div className={`${styles.card}`}>
        <div className="mb-4 d-flex justify-content-between align-items-center">
          <div className=" d-flex">
            <div
              className="center_content"
              style={{
                background: "#ff9f43",
                borderRadius: "5px",
                width: "34px",
                height: "34px",
                marginRight: "10px",
              }}
            >
              <img
                src="https://dreamspos.dreamguystech.com/html/template/assets/img/icons/filter.svg"
                height={24}
                width={24}
              />
            </div>
            <div>
              <div className={`center_content  ${styles.inputContainer}`}>
                <Image
                  src={"/images/search.svg"}
                  alt="search"
                  width={15}
                  height={16}
                />
                <input className={styles.input} />
              </div>
            </div>
          </div>
          <div
            className="center_content"
            style={{ width: "10%", justifyContent: "space-between" }}
          >
            <a>
              <img
                src="https://dreamspos.dreamguystech.com/html/template/assets/img/icons/pdf.svg"
                height={24}
                width={24}
              />
            </a>
            <a>
              <img
                src="https://dreamspos.dreamguystech.com/html/template/assets/img/icons/excel.svg"
                height={24}
                width={24}
              />
            </a>
            <a>
              <img
                src="https://dreamspos.dreamguystech.com/html/template/assets/img/icons/printer.svg"
                height={24}
                width={24}
              />
            </a>
          </div>
        </div>
        <DataTable
          columns={columns}
          data={data}
          selectableRows
          direction="auto"
          fixedHeaderScrollHeight="300px"
          highlightOnHover
          pagination
          responsive
          subHeaderAlign="right"
          subHeaderWrap
          customStyles={customStyles}
        />
      </div>
    </>
  );
};
