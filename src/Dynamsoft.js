import Dynamsoft from "dynamsoft-javascript-barcode";
Dynamsoft.BarcodeReader.engineResourcePath = "https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@7.3.0-v4/dist/";
// Please visit https://www.dynamsoft.com/CustomerPortal/Portal/TrialLicense.aspx to get a trial license
Dynamsoft.BarcodeReader.productKeys = "t0068NQAAACIUn2QPVKueIbvL/QS5F06q6PtYrRYtqcx0YvjfBiQDI132l33VGNoJv5BtGcyChU6gbD0jw9TDJFU81Q+9POc=";
// Dynamsoft.BarcodeReader._bUseFullFeature = true; // Control of loading min wasm or full wasm.
export default Dynamsoft;
