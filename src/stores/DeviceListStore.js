import { defineStore } from "pinia";

export const useDeviceListStore = defineStore({
    id: "deviceList",
    state: () => ({
        devices: [],
    }),
    getters: {
        getDevices: (state) => {
            return state.devices;
        }
    },
    actions: {
        addDevice(device) {
            this.devices.push(device);
        },
        removeDevice(device) {
            this.devices = this.devices.filter((d) => d.id !== device.id);
        },
        updateDevice(device) {
            this.devices = this.devices.map((d) => {
                if (d.id === device.id) {
                    return device;
                }
                return d;
            }
            );
        }
    }
});
