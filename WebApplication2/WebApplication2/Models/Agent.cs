using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication2.Models
{
    public class Agent
    {
        public int Agent_id { get; set; }
        public string Agent_name { get; set; }
        public string Agent_password { get; set; }
        public string Agent_phone { get; set; }
        public string Agent_email { get; set; }
        public string Agent_company { get; set; }
    }
}
