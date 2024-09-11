export abstract class BaseRepository {
  private host: string = "http://localhost:4059";

  protected request = async (
    path: string,
    method: string = "GET",
    body?: {}
  ): Promise<any> => {
    try {
      const options: RequestInit = { method };

      if (body !== undefined) {
        options.body = JSON.stringify(body);
      }

      if (method !== "GET" && method !== "DELETE") {
        options.headers = {
          "Content-Type": "application/json",
        };
      }

      let response: Response = await fetch(this.host + path, options);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          JSON.stringify({
            status: response.status,
            message: errorData.message,
          })
        );
      }

      return await response.json();
    } catch (e) {
      console.log("Erreur dans la base repo :", e);
      throw e;
    }
  };
}
