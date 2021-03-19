sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/Device",
        "sap/ui/model/json/JSONModel"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller,Device,JSONModel) {
		"use strict";

		return Controller.extend("MasterDetail.MasterDetail.controller.mainMaster", {
			onInit: function () {
                
                const oData = 
                {
                    values:[
                    {
                    codigo_producto: "210605120522 1",
                    cod_interno: "1000",
                    fecha_creacion: "2020-11-20T00:00:00Z",
                    fecha_vencimiento: "2020-12-31T00:00:00Z",
                    desc_producto: "Producto 1",
                    nombre_empresa: "CLIENTE Producto 1",
                    origen: "Argentina"

                    },
                    {
                    codigo_producto:"210132099429 2",
                    cod_interno: "2000",
                    fecha_creacion: "2020-11-20T00:00:00Z",
                    fecha_vencimiento: "2020-12-31T00:00:00Z",
                    desc_producto: "Producto 2",
                    nombre_empresa: "CLIENTE Producto 2",
                    origen: "Chile"
                    }]                 
                }

               let oModel = new JSONModel();
               oModel.setData(oData);
               this.getOwnerComponent().setModel(oModel,'modeloProductos')

               let oModelInicial = this.getOwnerComponent().getModel("modeloProductos");
               let oProductoSeleccionado = oModelInicial.getProperty("/values/0");
               let oModelProducto = new JSONModel(oProductoSeleccionado);
               this.getOwnerComponent().setModel(oModelProducto,'modeloSelectedItem');

               this.getOwnerComponent().getRouter().getRoute("RoutemainMaster").attachPatternMatched(this._onRouteMatched, this);
                

            },

            
            _onRouteMatched: function(oEvent) {
                
                this.getOwnerComponent().getRouter().navTo("RouteDetail", {productId:"0"}, true);
                

            },

            onSelectionChange: function(oEvent) {
                //Crear nuevo modelo
                let oModelSelectedItem = new JSONModel();

                let oItem = oEvent.getSource().getSelectedItem();
                let oBindingContext = oItem.getBindingContext("modeloProductos");

                let oModel = this.getOwnerComponent().getModel("modeloProductos");
                let oProductoSeleccionado = oModel.getProperty(oBindingContext.getPath());
                oModelSelectedItem.setData(oProductoSeleccionado);                
                this.getOwnerComponent().setModel(oModelSelectedItem,'modeloSelectedItem');

            }
            });
	});
