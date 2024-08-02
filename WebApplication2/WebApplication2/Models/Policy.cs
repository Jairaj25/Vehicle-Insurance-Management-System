using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication2.Models
{
    public class Policy
    {
        public int Policy_id { get; set; }
        public string Policy_type { get; set; }
        public string Policy_number { get; set; }
        public string Policy_amount { get; set; }
        public string Policy_valid_date { get; set; }
        public int cust_id { get; set; }

    }
}
