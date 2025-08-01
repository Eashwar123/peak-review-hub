import { MediaCard } from "./MediaCard";
import movie1 from "@/assets/movie-1.jpg";
import movie2 from "@/assets/movie-2.jpg";
import movie3 from "@/assets/movie-3.jpg";
import movie4 from "@/assets/movie-4.jpg";
import movie5 from "@/assets/movie-5.jpg";
import movie6 from "@/assets/movie-6.jpg";

const mockMovies = [
  {
    id: 1,
    title: "Quantum Edge",
    poster: movie1,
    year: 2024,
    genre: "Sci-Fi Thriller",
    rating: 4.2,
    reviewCount: 847,
  },
  {
    id: 2,
    title: "Summer Nights",
    poster: movie2,
    year: 2024,
    genre: "Romance Drama",
    rating: 4.6,
    reviewCount: 1203,
  },
  {
    id: 3,
    title: "Steel Guardian",
    poster: movie3,
    year: 2024,
    genre: "Action Adventure",
    rating: 4.1,
    reviewCount: 956,
  },
  {
    id: 4,
    title: "Mind Games",
    poster: movie4,
    year: 2024,
    genre: "Psychological Thriller",
    rating: 4.5,
    reviewCount: 742,
  },
  {
    id: 5,
    title: "The Last Kingdom",
    poster: movie5,
    year: 2024,
    genre: "Fantasy Adventure",
    rating: 4.3,
    reviewCount: 1089,
  },
  {
    id: 6,
    title: "Shadows",
    poster: movie6,
    year: 2024,
    genre: "Horror",
    rating: 3.9,
    reviewCount: 634,
  },
];

interface MediaGridProps {
  title?: string;
  subtitle?: string;
}

export const MediaGrid = ({ title = "Popular This Week", subtitle }: MediaGridProps) => {
  const handleRate = (movieId: number, rating: number) => {
    console.log(`Rated movie ${movieId} with ${rating} stars`);
    // TODO: Implement rating functionality with backend
  };

  const handleReview = (movieId: number) => {
    console.log(`Review movie ${movieId}`);
    // TODO: Implement review modal/page
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>

        {/* Movies grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {mockMovies.map((movie) => (
            <MediaCard
              key={movie.id}
              {...movie}
              onRate={(rating) => handleRate(movie.id, rating)}
              onReview={() => handleReview(movie.id)}
            />
          ))}
        </div>

        {/* Load more */}
        <div className="text-center mt-12">
          <button className="text-primary hover:text-primary/80 font-medium transition-colors">
            Load more movies →
          </button>
        </div>
      </div>
    </section>
  );
};