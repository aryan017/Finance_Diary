import { useUser } from "@clerk/clerk-react"
import { FinanacialRecordList } from "./financial-record-list";
import { FinancialRecordForm } from "./financial-record-form";
import "./financial-record.css";
import { useMemo } from "react";
import { useFinancialRecords } from "../../context/financial-record-context";
export const DashBoard=() => {
    const {user}=useUser();
    const {records}=useFinancialRecords();

    const totalBalance=useMemo(() => {
        let balance=0;

        records.forEach((record) => {
            balance+=record.amount;
        })
        return balance;

    },[records]);

    return (
        <div className="dashboard-container">
            <h1>Welcome : {user?.firstName}! Here is Your Finance Diary:</h1>
            <FinancialRecordForm/>
            <div>Current Balance : Rs {totalBalance}</div>
            <FinanacialRecordList/>
        </div>
    )
}