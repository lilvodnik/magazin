using System.Net.Http.Json;
using BlazorClient.Data;

namespace BlazorClient.Services;

public class ProductService
{
    private readonly HttpClient _http;
    
    public ProductService(HttpClient http)
    {
        _http = http;
    }

    public async Task<List<Product>> GetProductsAsync()
{
    try
    {
        return await _http.GetFromJsonAsync<List<Product>>("api/products") 
               ?? new List<Product>();
    }
    catch (HttpRequestException ex)
    {
        Console.WriteLine($"Ошибка при получении товаров: {ex.Message}");
        return new List<Product>();
    }
}
    public async Task AddProductAsync(Product product)
{
    var response = await _http.PostAsJsonAsync("api/products", product);
    
    if (!response.IsSuccessStatusCode)
    {
        var error = await response.Content.ReadAsStringAsync();
        throw new ApplicationException($"Ошибка при добавлении товара: {error}");
    }
}

    public async Task UpdateProductAsync(Product product)
    {
        await _http.PutAsJsonAsync($"api/products/{product.Id}", product);
    }

    public async Task DeleteProductAsync(int id)
    {
        await _http.DeleteAsync($"api/products/{id}");
    }
}