import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const SipCalculator = () => {
  const [mode, setMode] = useState("sip"); // 'sip' or 'lumpsum'
  const [amount, setAmount] = useState("");
  const [annualRate, setAnnualRate] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState(null);

  const COLORS = ["#4f46e5", "#10b981"]; // invested, gain
  const formatter = new Intl.NumberFormat("en-IN"); // Indian number format

  const calculate = () => {
    const P = parseFloat(amount);
    const r = parseFloat(annualRate) / 12 / 100;
    const n = parseInt(years) * 12;

    if (isNaN(P) || isNaN(r) || isNaN(n) || P <= 0 || r <= 0 || n <= 0) {
      setResult(null);
      return;
    }

    let maturity = 0;
    let invested = 0;

    if (mode === "sip") {
      maturity = P * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
      invested = P * n;
    } else {
      maturity = P * Math.pow(1 + r, n);
      invested = P;
    }

    const gain = maturity - invested;

    setResult({
      invested: invested.toFixed(2),
      gain: gain.toFixed(2),
      total: maturity.toFixed(2),
    });
  };

  return (
    <div className="max-w-xl mx-6 sm:mx-auto mt-40 bg-white p-6 rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        💰 {mode === "sip" ? "SIP" : "Lump Sum"} Calculator
      </h1>

      <div className="flex justify-center mb-6 space-x-4">
        <button
          className={`px-4 py-2 rounded ${
            mode === "sip"
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setMode("sip")}
        >
          SIP
        </button>
        <button
          className={`px-4 py-2 rounded ${
            mode === "lumpsum"
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setMode("lumpsum")}
        >
          Lump Sum
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="col-span-1">
          <label className="block mb-2 text-sm font-medium">
            {mode === "sip"
              ? "Monthly Investment (₹)"
              : "Investment Amount (₹)"}
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder={mode === "sip" ? "e.g. 5000" : "e.g. 100000"}
          />
        </div>
        <div className="col-span-1">
          <label className="block mb-2 text-sm font-medium">
            Annual Rate (%)
          </label>
          <input
            type="number"
            value={annualRate}
            onChange={(e) => setAnnualRate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="e.g. 12"
          />
        </div>
        <div className="col-span-1">
          <label className="block mb-2 text-sm font-medium">
            Duration (Years)
          </label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="e.g. 10"
          />
        </div>
      </div>

      <button
        onClick={calculate}
        className="mt-6 w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 transition"
      >
        Calculate
      </button>

      {result && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            📊 Investment Summary
          </h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="p-4 bg-gray-50 rounded">
              <p className="text-gray-600">Invested Amount</p>
              <p className="text-lg font-semibold text-indigo-600">
                ₹{formatter.format(result.invested)}
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded">
              <p className="text-gray-600">Estimated Gain</p>
              <p className="text-lg font-semibold text-green-600">
                ₹{formatter.format(result.gain)}
              </p>
            </div>
            <div className="col-span-2 p-4 bg-gray-100 rounded">
              <p className="text-gray-600">Total Maturity Value</p>
              <p className="text-xl font-bold text-gray-800">
                ₹{formatter.format(result.total)}
              </p>
            </div>
          </div>

          <div className="mt-6 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={[
                    { name: "Invested", value: parseFloat(result.invested) },
                    { name: "Gain", value: parseFloat(result.gain) },
                  ]}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={60}
                  outerRadius={90}
                  label
                >
                  {COLORS.map((color, index) => (
                    <Cell key={index} fill={color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default SipCalculator;
