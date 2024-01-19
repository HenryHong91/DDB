using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Henry_Task1.Migrations
{
    /// <inheritdoc />
    public partial class UpdatedStore : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Address",
                table: "Stores",
                newName: "Street");

            migrationBuilder.AddColumn<string>(
                name: "City",
                table: "Stores",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Zipcode",
                table: "Stores",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "City",
                table: "Stores");

            migrationBuilder.DropColumn(
                name: "Zipcode",
                table: "Stores");

            migrationBuilder.RenameColumn(
                name: "Street",
                table: "Stores",
                newName: "Address");
        }
    }
}
