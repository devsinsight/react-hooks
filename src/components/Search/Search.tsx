export const Search = ({search, searchInput, handleSearch}: any) =>
{
    return (
        <div className="Search">
            <input type="text" value={search} ref={searchInput} onChange={handleSearch} />
        </div>
    );
}