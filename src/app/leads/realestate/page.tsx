import { LeadsTable } from "@/components/leads/LeadsTable";

export default function RealestateLeadsPage() {
  return <LeadsTable category="realestate" allowedRoles={["broker", "admin"]} title="부동산 상담 요청" />;
}
