using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebApplication2.Models;

namespace WebApplication2.Models
{
    public class EFDdataContext : DbContext
    {
        public EFDdataContext(DbContextOptions<EFDdataContext> options)
               : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //config primary key(Product & Category)
            modelBuilder.Entity<Cust>().HasKey(s => s.Cust_id);
            modelBuilder.Entity<Agent>().HasKey(s => s.Agent_id);
            modelBuilder.Entity<Policy>().HasKey(s => s.Policy_id);
            modelBuilder.Entity<Vehicle>().HasKey(s => s.Vehicle_id);
            modelBuilder.Entity<Claims>().HasKey(s => s.Claims_id);

            //configuration relationship table(Product & Category)
            //modelBuilder.Entity<Product>()
            //    .HasOne(s => s.Category)
            //    .WithMany(s => s.Products)
            //    .HasForeignKey(s => s.idCategory)
            //    .OnDelete(DeleteBehavior.Restrict);


        }
        public DbSet<Cust> Custs { get; set; }
        public DbSet<Agent> Agents { get; set; }
        public DbSet<Agent> Policys { get; set; }
        public DbSet<Agent> Vehicles { get; set; }
        public DbSet<Agent> Claimss { get; set; }
        public DbSet<WebApplication2.Models.Vehicle> Vehicle { get; set; }
        public DbSet<WebApplication2.Models.Claims> Claims { get; set; }
        public DbSet<WebApplication2.Models.Policy> Policy { get; set; }
    }
}
