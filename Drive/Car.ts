import Vehicle from "../Vehicle/Vehicle";

export class Car extends Vehicle {
    // 시동을 켠다
    public run() {
        for (let i = 0; i < this.getNumberOfWheels(); i++) {
            this.wheels[i].rpm = 5;
        }
    }

    public isRoadEmpty(vehicles: Vehicle[]) {
        return vehicles.length === 0;
    }
}