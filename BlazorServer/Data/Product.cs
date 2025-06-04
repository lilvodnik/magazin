namespace BlazorServer.Data;
using System.ComponentModel.DataAnnotations; 

public class Product
{
    public int Id { get; set; }
    
    [Required, StringLength(100)]
    public string Name { get; set; } = string.Empty;
    
    [Range(0.01, 100000000000)]
    public decimal Price { get; set; }
    
    [StringLength(500)]
    public string? Description { get; set; }
}