class Microkernel {

    constructor() {
        // properties initialized
        this.component = {};
        this.event = {};  
    }

    // Register a new component
    registerComponent(name, component) {
        if (!this.component[name]) {
            this.component[name] = component;
            component.init();  
        }
    }

    // Unload a component
    unloadComponent(name) {
        if (this.component[name]) {
            this.component[name].destroy();
            delete this.component[name];
        }
    }

    // Subscribe to an event
    subscribe(event, callback) {
        
        if (!this.event[event]) {
            this.event[event] = [];  
        }
        this.event[event].push(callback);
    }

    // Publish an event
    publish(event, data) {
        if (this.event[event]) {
            this.event[event].forEach(callback => callback(data));
        }
    }
}
