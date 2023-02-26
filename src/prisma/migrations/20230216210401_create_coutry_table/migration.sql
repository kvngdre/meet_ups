-- CreateTable
CREATE TABLE "Country" (
    "id" TEXT NOT NULL,
    "country_code" VARCHAR(2) NOT NULL,
    "country_name" VARCHAR(255) NOT NULL,
    "timezone" VARCHAR(255) NOT NULL,
    "offset" VARCHAR(255) NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);
