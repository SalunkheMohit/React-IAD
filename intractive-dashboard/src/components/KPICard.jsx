import { motion } from 'framer-motion';


const KPICard = ({ label, value, icon: Icon, color}) => {
    return (
          <motion.div
          initial={{ opacity:0, y:20 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration: 0.4 }}
          className='bg-white dark:bg-gray-800 dark:text-white p-4 rounded-xl shadow hover:shadow-xl transition cursor-pointer'
          >
            <div className='flex items-center justify-between'>
              <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{label}</p>
            <h3 className="text-2xl font-semibold mt-1">
              {value}
            </h3>
              </div>
              <div className={`p-3 rounded-full ${color}`}>
                {Icon && <Icon className='text-white w-6 h-6' />}
              </div>
            </div>
          </motion.div>
    );
};

export default KPICard;