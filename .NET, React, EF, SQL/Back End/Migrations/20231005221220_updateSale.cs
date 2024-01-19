using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Henry_Task1.Migrations
{
    /// <inheritdoc />
    public partial class updateSale : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "SaleData",
                table: "Sales",
                newName: "SaleDate");

            migrationBuilder.AddColumn<int>(
                name: "Price",
                table: "Sales",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Price",
                table: "Sales");

            migrationBuilder.RenameColumn(
                name: "SaleDate",
                table: "Sales",
                newName: "SaleData");
        }
    }
}
