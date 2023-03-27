using Microsoft.EntityFrameworkCore;

namespace RoyalLibrary.API
{
    public class BooksContext : DbContext
    {
        public BooksContext(DbContextOptions<BooksContext> options)
            : base(options)
        {
        }

        public DbSet<Book> Books { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                var config = new ConfigurationBuilder()
                    .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                    .Build();

                optionsBuilder.UseSqlServer(config.GetConnectionString("DefaultConnection"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Book>()
                .HasKey(b => b.BookId);

            modelBuilder.Entity<Book>()
                .ToTable("books")
                .Property(b => b.BookId)
                .HasColumnName("book_id");

            modelBuilder.Entity<Book>()
                .ToTable("books")
                .Property(b => b.Title)
                .IsRequired()
                .HasMaxLength(100)
                .HasColumnName("title");

            modelBuilder.Entity<Book>()
                .ToTable("books")
                .Property(b => b.FirstName)
                .IsRequired()
                .HasMaxLength(50)
                .HasColumnName("first_name");

            modelBuilder.Entity<Book>()
                .ToTable("books")
                .Property(b => b.LastName)
                .IsRequired()
                .HasMaxLength(50)
                .HasColumnName("last_name");

            modelBuilder.Entity<Book>()
                .ToTable("books")
                .Property(b => b.TotalCopies)
                .IsRequired()
                .HasColumnName("total_copies");

            modelBuilder.Entity<Book>()
                .ToTable("books")
                .Property(b => b.CopiesInUse)
                .IsRequired()
                .HasColumnName("copies_in_use");

            modelBuilder.Entity<Book>()
                .ToTable("books")
                .Property(b => b.Type)
                .HasMaxLength(50)
                .HasColumnName("type");

            modelBuilder.Entity<Book>()
                .ToTable("books")
                .Property(b => b.ISBN)
                .HasMaxLength(80)
                .HasColumnName("isbn");

            modelBuilder.Entity<Book>()
                .ToTable("books")
                .Property(b => b.Category)
                .HasMaxLength(50)
                .HasColumnName("category");
        }
    }
}