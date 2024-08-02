using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication2.Models
{
    public class Vehicle
    {
        public int Vehicle_id { get; set; }
        public string Vehicle_plate_num { get; set; }
        public string Vehicle_company { get; set; }
        public string Vehicle_model { get; set; }
        public string Vehicle_color { get; set; }
        public string Vehicle_reg_date { get; set; }
        public string Vehicle_pending_fines { get; set; }
        public int Cust_id { get; set; }
    }
}
