import React from "react";
import Card from "./Card";
import TableComponent from "./TableComponent";

export default function Dashboard({ page }: any) {
  
  return (
    <div className="p-6">
      <div className="d-flex align-items-left align-items-md-center flex-column flex-md-row pt-2 pb-4 mt-2">
        <div>
          <h3 className="fw-bold mb-3 dashboard-head">Good Morning, Krishty</h3>
        </div>
      </div>
      <div className="row">
        {page?.components?.map((item: any, index: any) =>
          item.type === "Card" ? <Card key={index} {...item.props} /> : null
        )}
      </div>
      <TableComponent></TableComponent>
    </div>
  );
}
