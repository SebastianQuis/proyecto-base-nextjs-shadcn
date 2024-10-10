import { payments } from "@/app/data/payments";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const fetchData = async () => {
  return payments;
};

export default async function HomePage() {
  const payments = await fetchData();

  return (
    <div>
      <DataTable columns={columns} data={payments} />
    </div>
  );
}
