using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication2.Models
{
    public class Claims
    {
        public int Claims_id { get; set; }
        public int Cust_id { get; set; }
        public int Agent_id { get; set; }
        public int Policy_id { get; set; }
        public int Vehicle_id { get; set; }
        public string Claimed_amount { get; set; }
        public string Claims_status { get; set; }
        public string Approved_amount { get; set; }
        public string Remarks { get; set; }
    }
}
