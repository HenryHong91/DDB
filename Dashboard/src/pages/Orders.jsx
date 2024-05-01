import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
  Search,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { ordersData, contextMenuItems, ordersGrid } from "../data/orders";
import { Header } from "../components";

const Orders = () => {
  const toolbarOptions = ["Search"];

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />

      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            ContextMenu,
            Sort,
            PdfExport,
            Page,
            Filter,
            ExcelExport,
            Search,
            Toolbar,
          ]}
        ></Inject>
      </GridComponent>
    </div>
  );
};

export default Orders;
