import React from "react";

const StatItem = ({ icon, title, value }) => (
  <div className="flex space-x-5">
    <div className="bg-accent flex items-center rounded-xl">
      <img src={icon} alt="icon" />
    </div>
    <div>
      <p className="font-bold">{title}</p>
      <p className="font-thin">{value}</p>
    </div>
  </div>
);

const Statistics = () => {
  return (
    <div className="w-1/4 bg-primary flex flex-col space-y-3 mt-7 p-7 rounded-xl shadow">
      <h1 className="font-bold text-2xl text-center">Statistic</h1>
      <StatItem
        icon="/icon/statistics/interactions.png"
        title="Number of interactions"
        value="1,111"
      />
      <StatItem
        icon="/icon/statistics/activeuser.png"
        title="Active User"
        value="1,111"
      />
      <StatItem
        icon="/icon/statistics/responserate.png"
        title="Response rate"
        value="5-10 min"
      />
      <StatItem
        icon="/icon/statistics/average.png"
        title="Average Response Time"
        value="5.1 min"
      />
      <StatItem
        icon="/icon/statistics/populartopic.png"
        title="Most Popular Topics"
        value="Payment Method"
      />
      <StatItem
        icon="/icon/statistics/frequentkey.png"
        title="Most Frequent Keywords"
        value={
          <div className="flex space-x-2">
            <p className="font-thin bg-slate-300 px-1 rounded-full">Payment</p>
            <p className="font-thin bg-slate-300 px-1 rounded-full">Method</p>
            <p className="font-thin bg-slate-300 px-1 rounded-full">Tracking</p>
          </div>
        }
      />
      <StatItem
        icon="/icon/statistics/escalation.png"
        title="Escalation Rate"
        value="10 min"
      />
    </div>
  );
};

export default Statistics;
