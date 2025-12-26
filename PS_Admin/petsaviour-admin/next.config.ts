const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://192.168.1.203:4000/:path*",
      },
    ];
  },
};

export default nextConfig;
