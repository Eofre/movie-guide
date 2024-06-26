import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { MovieCard, MovieCardSkeleton, TMovie } from "entities/movie";
import { PATH_PAGE } from "shared/lib";
import { UiError, UiSlider } from "shared/ui";

export interface IMovieRowTemplateProps {
    title?: string;
    movies: TMovie[];
    loading?: boolean;
    error?: boolean;
}

export const MovieRowTemplate: FC<IMovieRowTemplateProps> = (props) => {
    const { title, movies, loading, error } = props;

    const navigate = useNavigate();
    const handleClickCard = (movieId: number) =>
        navigate(PATH_PAGE.MOVIE(movieId));

    return (
        <div>
            <h2 className="p-2 text-xl font-bold">{title}</h2>
            {error && (
                <div className="flex h-[336px] items-center justify-center">
                    <UiError />
                </div>
            )}
            {loading && (
                <UiSlider scrollAmount={500}>
                    {Array(20)
                        .fill(0)
                        .map((_, index) => (
                            <MovieCardSkeleton key={index} />
                        ))}
                </UiSlider>
            )}
            {movies && (
                <UiSlider scrollAmount={500}>
                    {movies.map((movie) => (
                        <div key={movie.id}>
                            <MovieCard
                                movie={movie}
                                onClickCard={() => handleClickCard(movie.id)}
                            />
                        </div>
                    ))}
                </UiSlider>
            )}
        </div>
    );
};
