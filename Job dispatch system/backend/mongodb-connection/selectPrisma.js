const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    // Connect the client
    await prisma.$connect()
    const ken = await prisma.Admin.findMany({
        where: {
            name: 'Ken',
        },
    })
    const all = await prisma.admin.findMany()
    const show = all.map((kan) => {
            // console.log(kan)
            return kan.name
        })
        // console.log(allUsers.)
}

main()
    .then(async() => {
        await prisma.$disconnect()
    })
    .catch(async(e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })