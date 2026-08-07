import { ArrowRight, Cloud, Database, Server } from "lucide-react";

function Node({
  icon: Icon,
  label,
  sub,
}: {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  sub?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl border border-border bg-background-elevated px-4 py-3 text-center">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
        <Icon size={16} />
      </div>
      <div>
        <p className="text-xs font-semibold text-foreground">{label}</p>
        {sub && <p className="text-[10px] text-muted">{sub}</p>}
      </div>
    </div>
  );
}

export function AwsArchitectureDiagram() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <div className="rounded-2xl border border-border bg-background p-5">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-wider text-accent">
          Cas 1 — Relationnel
        </p>
        <div className="flex items-center justify-center gap-3">
          <Node icon={Server} label="EC2" sub="PostgreSQL" />
          <div className="flex flex-col items-center text-muted">
            <ArrowRight size={16} />
            <span className="mt-1 text-[9px]">pglogical</span>
          </div>
          <Node icon={Database} label="Amazon RDS" sub="PostgreSQL" />
        </div>
        <p className="mt-4 text-center text-[11px] text-muted">
          VPC · Availability Zone · Subnet privé
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-background p-5">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-wider text-violet">
          Cas 2 — NoSQL
        </p>
        <div className="flex items-center justify-center gap-3">
          <Node icon={Database} label="MongoDB" sub="Source" />
          <div className="flex flex-col items-center text-muted">
            <ArrowRight size={16} />
            <span className="mt-1 text-[9px] text-center leading-tight">
              batch-write-item
            </span>
          </div>
          <Node icon={Cloud} label="DynamoDB" sub="Cible" />
        </div>
        <p className="mt-4 text-center text-[11px] text-muted">
          VPC · EC2 · AWS Cloud
        </p>
      </div>
    </div>
  );
}
