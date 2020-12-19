const identifierBytesData = ["R", "T", "5", "1", "1", "S", "E", "T"];

let bytesObject = {
    A1: "O",
    A2: "O",
    B1: "O",
    B2: "O",
    C1: "O",
    C2: "O",
    D1: "O",
    D2: "O",
    E1: "O",
    E2: "O",
    F1: "O",
    F2: "O",
    G1: "O",
    G2: "O",
    H1: "O",
    H2: "O",
    I1: "O",
    I2: "O",
};
const getByteData = (port, portType) => {
    switch (portType) {
        case "DIGITAL_OUTPUT": {
            bytesObject[port] = "O";
            break;
        }
        // PWM is ANALOG_OUTPUT
        case "PWM": {
            bytesObject[port] = "P";
            break;
        }
    }

    console.log(bytesObject);
};

//
// const finalData = identifierBytesData.concat(Object.values(bytesObject));

module.exports = getByteData;
