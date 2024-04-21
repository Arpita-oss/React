mongoose.connect("mongodb+srv://arpitabais19:sxWLp8htqMai3BhZ@cluster0.uqrcpfd.mongodb.net/stream").then(() => {
  console.log("connected to db")
}).catch(err => {
  console.log(err)
})
