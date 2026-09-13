import { LeadsTable } from "@/components/leads/LeadsTable";

export default function FranchiseLeadsPage() {
  return <LeadsTable category="franchise" allowedRoles={["recruiter", "admin"]} title="프랜차이즈 상담 요청" />;
}
