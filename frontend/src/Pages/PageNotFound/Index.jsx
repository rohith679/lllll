const PageNotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-lg">The page you are looking for does not exist.</p>
      </div>
    </div>
  );
};

export default PageNotFound;
