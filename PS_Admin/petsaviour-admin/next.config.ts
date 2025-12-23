const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://192.168.1.203:4000/:path*",
      },
    ];
  },
};

export default nextConfig;
