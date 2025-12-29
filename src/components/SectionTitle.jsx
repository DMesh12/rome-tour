import React from 'react';

const SectionTitle = ({ icon: Icon, title, colorClass = "text-amber-900" }) => (
    <h3 className={`text-3xl font-bold ${colorClass} mb-6 flex items-center border-b-2 border-stone-200 pb-3 font-serif`}>
        <Icon className="ml-3 stroke-[1.5]" size={32} />
        {title}
    </h3>
);

export default SectionTitle;
