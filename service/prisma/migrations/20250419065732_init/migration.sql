-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "team" TEXT NOT NULL,
    "memo" TEXT,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);
