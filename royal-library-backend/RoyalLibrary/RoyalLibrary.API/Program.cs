using Microsoft.EntityFrameworkCore;
using RoyalLibrary.API;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<BooksContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddCors();

var app = builder.Build();

using var scope = app.Services.CreateScope();
var dbContext = scope.ServiceProvider.GetRequiredService<BooksContext>();
await dbContext.Database.EnsureDeletedAsync();
await dbContext.Database.MigrateAsync();

app.UseCors(corsPolicyBuilder =>  corsPolicyBuilder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
app.MapGet("/books", Search);
app.Run();

async Task<IResult> Search(BooksContext db, string field, string value)
{
    field = string.IsNullOrEmpty(field) ? "Title" : field;
    
    try
    {
        if (string.IsNullOrEmpty(field) && string.IsNullOrEmpty(value)) 
            return Results.Ok(await db.Books.OrderBy(x => x.Title).ToListAsync());

        var books = await db.Books.Where(c => EF.Property<string>(c, field).Contains(value))
            .OrderBy(x => x.Title)
            .ToListAsync();

        return Results.Ok(books);
    }
    catch (Exception e)
    {
        Console.WriteLine(e.Message);
        return Results.BadRequest();
    }
}