import RegulatoryHero from '@/components/common/RegulatoryHero';
import { 
  ShieldAlert, 
  Gavel, 
  CheckSquare 
} from 'lucide-react';

export default function LiquidationPage() {
  const divisionTotals = [
    { name: 'Bengaluru Division', notWorking: 185, liqPending: 169, liqOrder: 92, closed: 20, total: 466 },
    { name: 'Mysuru Division', notWorking: 22, liqPending: 6, liqOrder: 29, closed: 17, total: 74 },
    { name: 'Belagavi Division', notWorking: 291, liqPending: 192, liqOrder: 194, closed: 50, total: 727 },
    { name: 'Kalaburagi Division', notWorking: 182, liqPending: 29, liqOrder: 168, closed: 58, total: 437 },
  ];

  const belagaviDistricts = [
    { name: 'BELAGAVI', notWorking: 100, liqPending: 124, liqOrder: 71, closed: 24, total: 319 },
    { name: 'VIJAYAPURA', notWorking: 92, liqPending: 37, liqOrder: 50, closed: 5, total: 184 },
    { name: 'BAGALKOT', notWorking: 35, liqPending: 15, liqOrder: 22, closed: 5, total: 77 },
    { name: 'DHARWAD', notWorking: 19, liqPending: 14, liqOrder: 15, closed: 6, total: 54 },
    { name: 'HAVERI', notWorking: 16, liqPending: 1, liqOrder: 12, closed: 1, total: 30 },
    { name: 'GADAG', notWorking: 10, liqPending: 1, liqOrder: 5, closed: 6, total: 22 },
    { name: 'UTTARA KANNADA', notWorking: 19, liqPending: 0, liqOrder: 19, closed: 3, total: 41 },
  ];

  const bengaluruDistricts = [
    { name: 'BENGALURU URBAN', notWorking: 95, liqPending: 89, liqOrder: 17, closed: 5, total: 206 },
    { name: 'BENGALURU RURAL', notWorking: 5, liqPending: 0, liqOrder: 3, closed: 3, total: 11 },
    { name: 'RAMANAGARA', notWorking: 3, liqPending: 11, liqOrder: 0, closed: 0, total: 14 },
    { name: 'CHIKKABALLAPURA', notWorking: 9, liqPending: 10, liqOrder: 0, closed: 0, total: 19 },
    { name: 'KOLAR', notWorking: 7, liqPending: 3, liqOrder: 8, closed: 0, total: 18 },
    { name: 'TUMAKURU', notWorking: 25, liqPending: 22, liqOrder: 23, closed: 12, total: 82 },
    { name: 'SHIVAMOGGA', notWorking: 14, liqPending: 18, liqOrder: 6, closed: 0, total: 38 },
    { name: 'CHITRADURGA', notWorking: 13, liqPending: 14, liqOrder: 26, closed: 0, total: 53 },
    { name: 'DAVANAGERE', notWorking: 14, liqPending: 2, liqOrder: 9, closed: 0, total: 25 },
  ];

  const mysuruDistricts = [
    { name: 'MYSURU', notWorking: 6, liqPending: 4, liqOrder: 7, closed: 5, total: 22 },
    { name: 'MANDYA', notWorking: 2, liqPending: 1, liqOrder: 1, closed: 0, total: 4 },
    { name: 'HASSAN', notWorking: 8, liqPending: 0, liqOrder: 7, closed: 3, total: 18 },
    { name: 'CHAMARAJANAGARA', notWorking: 1, liqPending: 0, liqOrder: 2, closed: 0, total: 3 },
    { name: 'SOUTH CANARA (D.K)', notWorking: 0, liqPending: 1, liqOrder: 4, closed: 2, total: 7 },
    { name: 'KODAGU', notWorking: 1, liqPending: 0, liqOrder: 0, closed: 0, total: 1 },
    { name: 'CHIKMAGALUR', notWorking: 4, liqPending: 0, liqOrder: 5, closed: 3, total: 12 },
    { name: 'UDUPI', notWorking: 0, liqPending: 0, liqOrder: 3, closed: 4, total: 7 },
  ];

  const kalaburagiDistricts = [
    { name: 'KALABURAGI', notWorking: 43, liqPending: 12, liqOrder: 51, closed: 1, total: 107 },
    { name: 'BIDAR', notWorking: 28, liqPending: 2, liqOrder: 35, closed: 14, total: 79 },
    { name: 'YADAGIRI', notWorking: 20, liqPending: 4, liqOrder: 5, closed: 0, total: 29 },
    { name: 'BALLARI', notWorking: 9, liqPending: 3, liqOrder: 7, closed: 2, total: 21 },
    { name: 'VIJAYANAGARA', notWorking: 25, liqPending: 0, liqOrder: 9, closed: 33, total: 67 },
    { name: 'RAICHUR', notWorking: 28, liqPending: 0, liqOrder: 32, closed: 5, total: 65 },
    { name: 'KOPPAL', notWorking: 29, liqPending: 8, liqOrder: 29, closed: 3, total: 69 },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Shared Hero Component */}
      <RegulatoryHero 
        title="Liquidation Process & Status"
        subtitle="Procedures and current status of co-operatives under the Karnataka Souharda Sahakari Act, 1997."
        tag="COMPLIANCE & DISSOLUTION"
      />

      {/* Dashboard Section */}
      <section className="py-12 max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 tracking-tight">
            KSSFCL STATE-WIDE COOPERATIVE MASTER DASHBOARD
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Updated Status as of April 30, 2026
          </p>
        </div>

        {/* 1. Summary Division Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-12">
          <div className="bg-slate-900 text-white px-6 py-4">
            <h3 className="text-lg font-bold">1. Liquidation Status (All Divisions)</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-center border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-semibold">
                  <th className="py-3 px-4 text-left">Division</th>
                  <th className="py-3 px-4">Not Working</th>
                  <th className="py-3 px-4">Liquidation Pending</th>
                  <th className="py-3 px-4">Liquidation Order</th>
                  <th className="py-3 px-4">Closed (Cancelled)</th>
                  <th className="py-3 px-4 bg-amber-400 text-slate-950 font-bold">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-medium text-slate-800">
                {divisionTotals.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="py-3.5 px-4 text-left font-semibold text-slate-900">{item.name}</td>
                    <td className="py-3.5 px-4">{item.notWorking}</td>
                    <td className="py-3.5 px-4">{item.liqPending}</td>
                    <td className="py-3.5 px-4">{item.liqOrder}</td>
                    <td className="py-3.5 px-4">{item.closed}</td>
                    <td className="py-3.5 px-4 font-bold text-slate-900 bg-amber-50">{item.total}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-slate-900 text-white font-bold text-base">
                  <td className="py-4 px-4 text-left">STATE GRAND TOTAL</td>
                  <td className="py-4 px-4">680</td>
                  <td className="py-4 px-4">396</td>
                  <td className="py-4 px-4">483</td>
                  <td className="py-4 px-4">145</td>
                  <td className="py-4 px-4 text-amber-400">1704</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* 2. Detailed Division-wise Tables */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="bg-slate-900 text-white px-6 py-4 flex flex-wrap justify-between items-center gap-2">
            <h3 className="text-lg font-bold">2. Types of Souharda Cooperatives (Division-wise)</h3>
            <span className="bg-amber-400 text-slate-950 text-xs font-bold px-3 py-1 rounded-full">
              Data Captured: 30-Apr-26
            </span>
          </div>

          <div className="divide-y divide-slate-200">
            {/* BELAGAVI DIVISION */}
            <DistrictTable title="BELAGAVI DIVISION" data={belagaviDistricts} totalNotWorking={291} totalLiqPending={192} totalLiqOrder={194} totalClosed={50} grandTotal={727} />

            {/* BENGALURU DIVISION */}
            <DistrictTable title="BENGALURU DIVISION" data={bengaluruDistricts} totalNotWorking={185} totalLiqPending={169} totalLiqOrder={92} totalClosed={20} grandTotal={466} />

            {/* MYSURU DIVISION */}
            <DistrictTable title="MYSURU DIVISION" data={mysuruDistricts} totalNotWorking={22} totalLiqPending={6} totalLiqOrder={29} totalClosed={17} grandTotal={74} />

            {/* KALABURAGI DIVISION */}
            <DistrictTable title="KALABURAGI DIVISION" data={kalaburagiDistricts} totalNotWorking={182} totalLiqPending={29} totalLiqOrder={168} totalClosed={58} grandTotal={437} />
          </div>
        </div>
      </section>

      {/* Regulatory Intervention Section */}
      <section className="py-16 bg-slate-100 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <h2 className="text-3xl font-bold text-slate-900">Regulatory Intervention</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              When a member cooperative fails to meet customer expectations or violates its registered Bylaws, the Apex Body initiates the liquidation process to protect the interests of members and creditors.
            </p>
          </div>

          {/* Process Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <ShieldAlert className="w-10 h-10 text-red-600" />
              <h3 className="font-bold text-lg text-slate-900">1. Order of Winding Up</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The process begins with an official order from the Registrar or Apex Body based on audit reports or persistent violations of the Souharda Act.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <Gavel className="w-10 h-10 text-blue-600" />
              <h3 className="font-bold text-lg text-slate-900">2. Asset Realization</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The Liquidator takes charge of all properties, records, and assets. These are professionally valued and sold to generate settlement funds.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <CheckSquare className="w-10 h-10 text-emerald-600" />
              <h3 className="font-bold text-lg text-slate-900">3. Priority Settlement</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dues are settled based on legal priority: starting with liquidation costs, followed by employee wages, secured creditors, and finally, depositors.
              </p>
            </div>
          </div>

          {/* Priority of Payments List */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-bold text-slate-900 pb-4 border-b border-slate-200">
              Priority of Payments
            </h3>
            <ul className="divide-y divide-slate-100 text-sm">
              <li className="py-4 flex justify-between items-center gap-4">
                <span className="text-slate-700 font-medium">Cost of Liquidation Process</span>
                <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full">
                  Priority 1
                </span>
              </li>
              <li className="py-4 flex justify-between items-center gap-4">
                <span className="text-slate-700 font-medium">Statutory Dues &amp; Government Taxes</span>
                <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full">
                  Priority 2
                </span>
              </li>
              <li className="py-4 flex justify-between items-center gap-4">
                <span className="text-slate-700 font-medium">Employee Wages and Benefits</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full">
                  Priority 3
                </span>
              </li>
              <li className="py-4 flex justify-between items-center gap-4">
                <span className="text-slate-700 font-medium">Depositors and Members</span>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">
                  Priority 4
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

{/* Helper Component for Division Tables */}
function DistrictTable({
  title,
  data,
  totalNotWorking,
  totalLiqPending,
  totalLiqOrder,
  totalClosed,
  grandTotal,
}: {
  title: string;
  data: { name: string; notWorking: number; liqPending: number; liqOrder: number; closed: number; total: number }[];
  totalNotWorking: number;
  totalLiqPending: number;
  totalLiqOrder: number;
  totalClosed: number;
  grandTotal: number;
}) {
  return (
    <div>
      <div className="bg-lime-100 text-blue-900 py-2.5 px-4 text-center font-bold text-sm tracking-wide border-y border-slate-200">
        ✦ {title} ✦
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-center text-xs">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase">
              <th className="py-2.5 px-3">SL.</th>
              <th className="py-2.5 px-3 text-left">District</th>
              <th className="py-2.5 px-3">Not Working</th>
              <th className="py-2.5 px-3">Liq. Pending</th>
              <th className="py-2.5 px-3">Liq. Order</th>
              <th className="py-2.5 px-3">Closed</th>
              <th className="py-2.5 px-3 bg-amber-50 text-slate-900 font-bold">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-slate-700">
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-slate-50">
                <td className="py-2 px-3">{index + 1}</td>
                <td className="py-2 px-3 text-left font-bold text-slate-900">{row.name}</td>
                <td className="py-2 px-3">{row.notWorking}</td>
                <td className="py-2 px-3">{row.liqPending}</td>
                <td className="py-2 px-3">{row.liqOrder}</td>
                <td className="py-2 px-3">{row.closed}</td>
                <td className="py-2 px-3 font-bold text-slate-900 bg-amber-50">{row.total}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-slate-100 font-bold text-slate-900 border-t border-slate-200">
              <td colSpan={2} className="py-2.5 px-3 text-left">DIVISION TOTAL</td>
              <td className="py-2.5 px-3">{totalNotWorking}</td>
              <td className="py-2.5 px-3">{totalLiqPending}</td>
              <td className="py-2.5 px-3">{totalLiqOrder}</td>
              <td className="py-2.5 px-3">{totalClosed}</td>
              <td className="py-2.5 px-3 bg-amber-100">{grandTotal}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}