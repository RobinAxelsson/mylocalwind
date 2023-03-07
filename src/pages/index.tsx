import Head from "next/head";

const cities = [
  { name: "New York", temperature: "16", description: "Cloudy" },
  { name: "Los Angeles", temperature: "22", description: "Sunny" },
  { name: "Chicago", temperature: "7", description: "Snowy" },
  { name: "Houston", temperature: "18", description: "Rainy" },
  { name: "Phoenix", temperature: "25", description: "Sunny" },
  { name: "Philadelphia", temperature: "12", description: "Cloudy" },
  { name: "San Antonio", temperature: "21", description: "Sunny" },
  { name: "San Diego", temperature: "20", description: "Sunny" },
  { name: "Dallas", temperature: "15", description: "Rainy" },
  { name: "San Jose", temperature: "19", description: "Sunny" },
];

export default function Home() {
  return (
    <div className="bg-gray-100 h-screen">
  <Head>
    <title>Weather Dashboard</title>
    <meta name="description" content="Weather dashboard app" />
    <link rel="icon" href="/favicon.ico" />
  </Head>

  <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="py-6">
      <h1 className="text-2xl font-bold text-gray-900">Weather Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {cities.map((city, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
          >
            <div className="p-4 flex-1">
              <h2 className="text-xl font-bold text-gray-900">{city.name}</h2>
              <p className="text-gray-600">{city.description}</p>
              <div className="flex items-center mt-2">
                <span className="text-4xl font-bold text-blue-500 mr-2">
                  {city.temperature}
                </span>
                <span className="text-gray-600">°C</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </main>
</div>
  );
}
