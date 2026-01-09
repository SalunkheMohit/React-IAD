const KPICard = ({ label, value}) => {
    return (
          <div className="bg-white shadow-sm p-4 rounded-xl hover:shadow-xl transition-all duration-300 cursor-pointer">
            <p className="text-gray-500 text-sm">{label}</p>
            <h3 className="text-2xl font-semibold mt-2">{value}</h3>
          </div>
    );
};

export default KPICard;