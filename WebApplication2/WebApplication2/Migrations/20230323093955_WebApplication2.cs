using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication2.Migrations
{
    public partial class WebApplication2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Agent",
                columns: table => new
                {
                    Agent_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Agent_name = table.Column<string>(nullable: true),
                    Agent_password = table.Column<string>(nullable: true),
                    Agent_phone = table.Column<string>(nullable: true),
                    Agent_email = table.Column<string>(nullable: true),
                    Agent_company = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Agent", x => x.Agent_id);
                });

            migrationBuilder.CreateTable(
                name: "Claims",
                columns: table => new
                {
                    Claims_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Cust_id = table.Column<int>(nullable: false),
                    Agent_id = table.Column<int>(nullable: false),
                    Policy_id = table.Column<int>(nullable: false),
                    Vehicle_id = table.Column<int>(nullable: false),
                    Claimed_amount = table.Column<int>(nullable: false),
                    Approved_amount = table.Column<int>(nullable: false),
                    Remarks = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Claims", x => x.Claims_id);
                });

            migrationBuilder.CreateTable(
                name: "Custs",
                columns: table => new
                {
                    Cust_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Cust_name = table.Column<string>(nullable: true),
                    Cust_pass = table.Column<string>(nullable: true),
                    Cust_gender = table.Column<string>(nullable: true),
                    Cust_nationality = table.Column<string>(nullable: true),
                    Cust_license = table.Column<string>(nullable: true),
                    Agent_id = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Custs", x => x.Cust_id);
                });

            migrationBuilder.CreateTable(
                name: "Policy",
                columns: table => new
                {
                    Policy_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Policy_type = table.Column<string>(nullable: true),
                    Policy_number = table.Column<string>(nullable: true),
                    Policy_amount = table.Column<string>(nullable: true),
                    Policy_valid_date = table.Column<string>(nullable: true),
                    cust_id = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Policy", x => x.Policy_id);
                });

            migrationBuilder.CreateTable(
                name: "Vehicle",
                columns: table => new
                {
                    Vehicle_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Vehicle_plate_num = table.Column<string>(nullable: true),
                    Vehicle_company = table.Column<string>(nullable: true),
                    Vehicle_model = table.Column<string>(nullable: true),
                    Vehicle_color = table.Column<string>(nullable: true),
                    Vehicle_reg_date = table.Column<string>(nullable: true),
                    Vehicle_pending_fines = table.Column<string>(nullable: true),
                    Cust_id = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vehicle", x => x.Vehicle_id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Agent");

            migrationBuilder.DropTable(
                name: "Claims");

            migrationBuilder.DropTable(
                name: "Custs");

            migrationBuilder.DropTable(
                name: "Policy");

            migrationBuilder.DropTable(
                name: "Vehicle");
        }
    }
}
