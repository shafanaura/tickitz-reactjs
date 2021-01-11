import React from "react";

function OrderSeat() {
	return (
		<div>
			<div class="container pt-5">
				<div class="row">
					<div class="col-12 col-lg-8">
						<p class="text-display-xs-bold">Choose Your Seat</p>
						<div class="card border-0 p-5">
							<div class="card-body row text-center">
								<div class="col-11 ms-auto">
									<p class="text-link-xs">Screen</p>
									<div class="line-screen"></div>
								</div>
							</div>
							<div class="card-body row">
								<div class="col-1 num">
									<table class="text-center ml-4">
										<tr>
											<td>A</td>
										</tr>
										<tr>
											<td>B</td>
										</tr>
										<tr>
											<td>C</td>
										</tr>
										<tr>
											<td>D</td>
										</tr>
										<tr>
											<td>E</td>
										</tr>
										<tr>
											<td>F</td>
										</tr>
										<tr>
											<td>G</td>
										</tr>
									</table>
								</div>
								<div class="col-11">
									<table class="float-start col-md-4">
										<tr>
											<td>
												<input type="checkbox" />
											</td>
											<td>
												<input type="checkbox" />
											</td>
											<td>
												<input type="checkbox" />
											</td>
											<td>
												<input type="checkbox" />
											</td>
											<td>
												<input type="checkbox" />
											</td>
											<td>
												<input type="checkbox" />
											</td>
											<td>
												<input type="checkbox" />
											</td>
										</tr>
										<tr>
											<td>
												<input type="checkbox" />
											</td>
											<td>
												<input type="checkbox" />
											</td>
											<td>
												<input type="checkbox" />
											</td>
											<td>
												<input type="checkbox" />
											</td>
											<td>
												<input type="checkbox" />
											</td>
											<td>
												<input type="checkbox" />
											</td>
											<td>
												<input type="checkbox" />
											</td>
										</tr>
									</table>
									<table class="float-end col-md-4">
										<tr>
											<td>
												<input type="checkbox" />
											</td>
											<td>
												<input type="checkbox" />
											</td>
											<td>
												<input type="checkbox" />
											</td>
											<td>
												<input type="checkbox" />
											</td>
											<td>
												<input type="checkbox" />
											</td>
											<td>
												<input type="checkbox" />
											</td>
											<td>
												<input type="checkbox" />
											</td>
										</tr>
										<tr>
											<td>
												<input type="checkbox" />
											</td>
											<td>
												<input type="checkbox" />
											</td>
											<td>
												<input type="checkbox" />
											</td>
											<td>
												<input type="checkbox" />
											</td>
											<td>
												<input type="checkbox" />
											</td>
											<td>
												<input type="checkbox" />
											</td>
											<td>
												<input type="checkbox" />
											</td>
										</tr>
									</table>
								</div>
							</div>
						</div>
					</div>
					<div class="col-12 col-lg-4">
						<p class="text-display-xs-bold">Order Info</p>
						<div class="card border-0 shadow">
							<div class="card-body pb-0">
								<div class="text-center">
									<img src="../../assets/cineone.png" height="23px" alt="" />
									<p class="text-link-lg pt-2">CineOne21 Cinema</p>
								</div>
								<div class="d-flex justify-content-between">
									<p class="text-xs text-color-label">Movie selected</p>
									<p class="text-right text-link-xs text-color-title">
										Spider-Man: Homecoming
									</p>
								</div>
								<div class="d-flex justify-content-between">
									<p class="text-xs text-color-label">Tuesday, 07 July 2020</p>
									<p class="text-right text-link-xs text-color-title">
										02:00pm
									</p>
								</div>
								<div class="d-flex justify-content-between">
									<p class="text-xs text-color-label">One ticket price</p>
									<p class="text-right text-link-xs text-color-title">$10</p>
								</div>
								<div class="d-flex justify-content-between">
									<p class="text-xs text-color-label">Seat choosed</p>
									<p class="text-right text-link-xs text-color-title">
										C4, C5, C6
									</p>
								</div>
							</div>
							<hr />
							<div class="card-body pt-0">
								<p class="float-start text-link-md">Total Payment</p>
								<p class="float-end text-display-xs-bold text-primary text-right">
									$30
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default OrderSeat;
