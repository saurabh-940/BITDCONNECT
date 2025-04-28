import express from "express";
import event from "../schema/eveSchema.js";
import clubLogin from "../schema/userSchema.js";
import multer from "multer";
import moment from "moment/moment.js";

const router = express.Router();

const imgconfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads");
  },
  filename: (req, file, callback) => {
    callback(null, `imgae-${Date.now()}.${file.originalname}`);
  },
});

const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(new Error("only images is allowd"));
  }
};

const upload = multer({
  storage: imgconfig,
  fileFilter: isImage,
});

router.post("/AddEvent", upload.single("photo"), async (req, res) => {
  const { filename } = req.file;
  const teve = req.body;

  if (!filename || !teve) {
    res.status(401).json({ status: 401, message: "fill all the data" });
  }
  try {
    const date = moment(new Date()).format("YYYY-MM-DD");

    const newEvent = new event({
      club: teve.club,
      eventname: teve.eventname,
      eventdesc: teve.eventdesc,
      eventdate: teve.eventdate,
      venue: teve.venue,
      reglink: teve.reglink,
      eventlink: teve.eventlink,
      evePoster: filename,
      date: date,
    });

    const finaldata = await newEvent.save();

    res.status(201).json({ status: 201, finaldata });
  } catch (error) {
    res.status(401).json({ status: 401, error });
  }
});

router.get("/Club", async (req, res) => {
  try {
    const getEve = await event.find();

    res.status(201).json({ status: 201, getEve });
  } catch (error) {
    res.status(401).json({ status: 401, error });
  }
});

router.post("/Login", (req, res) => {
  const { email, password } = req.body;
  clubLogin.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Successfull", user: user });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: "User not registered" });
    }
  });
});

router.post("/Register", (req, res) => {
  const { name, email, password } = req.body;
  clubLogin.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User already registerd" });
    } else {
      const user = new clubLogin({
        name,
        email,
        password,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully Registered, Please login now." });
        }
      });
    }
  });
});

router.delete("/:id/Delete", (req, res) => {
  // const { id } = req.params;
  // console.log(id);
  // event
  //   .deleteOne({ _id: id })
  //   .then(() => res.send(id))
  //   .catch((err) => {
  //     console.log(err);
  //     res.send({ error: err, msg: "Something went wrong!" });
  //   });
  try {
    event.deleteOne({ _id: req.params.id }).then(() => {
      res.send({ message: "event deleted" });
    });
  } catch {
    res.status(409).json({ message: error.message });
  }
});

export default router;
