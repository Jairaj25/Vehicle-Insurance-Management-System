using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication2.Models
{
    public class Cust
    {
        public int Cust_id { get; set; }
        public string Cust_name { get; set; }
        public string Cust_pass { get; set; }
        public string Cust_gender { get; set; }
        public string Cust_nationality { get; set; }
        public string Cust_license { get; set; }
        public int Agent_id { get; set; }
    }
}
