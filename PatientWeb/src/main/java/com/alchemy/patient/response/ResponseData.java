package com.alchemy.patient.response;

public class ResponseData 
{	
	private String msg;
	private Object data;
	private boolean status;
	
	public ResponseData(String msg, Object data, boolean status) {
		super();
		this.msg = msg;
		this.data = data;
		this.status = status;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public Object getData() {
		return data;
	}

	public void setData(Object data) {
		this.data = data;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}
}
